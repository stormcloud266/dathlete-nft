import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import constants from '/constants';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { Formik } from 'formik';

import ERC20 from '/artifacts/contracts/interfaces/IERC20.sol/IERC20.json';
import DAOFacet from '/artifacts/contracts/facets/DAOFacet.sol/DAOFacet.json';
import ChallengesFacet from '/artifacts/contracts/facets/ChallengesFacet.sol/ChallengesFacet.json';

import usePoller from '../hooks/usePoller';

const initialForm = {
  name: '',
  description: '',
  prtclePrice: 0,
  maxQuantity: 0,
  canPurchaseWithPrtcle: false,
  canBeTransferred: false,
  totalQuantity: 0,
  animation_url: '',
  attributes: [],
};

export function Mint(props) {
  const { web3Provider, address } = props;
  const { diamondAddress, prtcleAddress } = constants;
  const [selfId, setSelfId] = useState();
  const [videoUri, setVideoUri] = useState('');
  const [isIPFSUpload, setIsIPFSUpload] = useState(false);
  const [challengeType, setChallengeType] = useState();
  const [contracts, setContracts] = useState({});

  useEffect(() => {
    if (web3Provider) {
      const signer = web3Provider.getSigner();

      let daoFacetContract = new ethers.Contract(
        diamondAddress,
        DAOFacet.abi,
        signer
      );

      let challengesFacetContract = new ethers.Contract(
        diamondAddress,
        ChallengesFacet.abi,
        signer
      );

      setContracts({ daoFacetContract, challengesFacetContract });
    }
  }, [web3Provider]);

  const onDrop = useCallback((acceptedFiles) => {
    const url = URL.createObjectURL(acceptedFiles[0]);
    setVideoUri(url);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'video/*',
    multiple: false,
    onDrop,
  });

  async function addToPinata(e) {
    const file = acceptedFiles[0];
    let ipfs = await IPFS.create({
      url: 'https://api.pinata.cloud/psa',
    });

    const { cid } = await ipfs.add(file);
    console.log('cid: ', cid);
    const url = `https://gateway.pinata.cloud/ipfs/${cid.string}`;
    setVideoUri(url);
    setIsIPFSUpload(true);
  }

  const addChallengeType = (values) => {
    const challenge = {
      id: challengeType.id + 1,
      canPurchaseWithPrtcle: true,
      canBeTransferred: true,
      totalQuantity: '0',
      ...values,
    };
    if (web3Provider) contracts.daoFacetContract.addChallengeTypes([challenge]);
  };

  const getChallengeTypes = async () => {
    const challenge =
      await contracts.challengesFacetContract.getNewestChallengeType();
    setChallengeType(challenge);
  };

  usePoller(
    () => {
      if (!!web3Provider) {
        getChallengeTypes();
      }
    },
    props.pollTime ? props.pollTime : 1999
  );

  // const onSelfIdConnect = async () => {
  //   const { provider, address } = web3State;
  //   const authProvider = new EthereumAuthProvider(provider, address);
  //   const client = new WebClient({ connectNetwork: 'testnet-clay' });
  //   const did = await client.authenticate(authProvider, true);
  //   const SelfId = new SelfID({ client, did });
  //   try {
  //     await SelfId.authenticate(authProvider);
  //     setSelfId(SelfId);
  //   } catch (err) {
  //     throw err;
  //   }
  // };
  return (
    <Main>
      {acceptedFiles.length > 0 ? (
        <div>
          <ButtonFrame onClick={addToPinata}>
            <p>Upload to IPFS</p>
          </ButtonFrame>
          {!!videoUri && <Player autoPlay={true} controls url={videoUri} />}
        </div>
      ) : (
        <DropzoneWrapper {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </DropzoneWrapper>
      )}
      <div>
        <p>{JSON.stringify(challengeType)}</p>
        <Formik
          initialValues={initialForm}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = 'Required';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            addChallengeType(values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,

            errors,

            touched,

            handleChange,

            handleBlur,

            handleSubmit,

            isSubmitting,

            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <p style={{ margin: 0 }}> Upload </p>
                <Input
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  border={errors.name && '1px solid red'}
                  value={values.name}
                />

                {errors.name && touched.name && errors.name}
              </div>

              <TextArea
                name="description"
                placeholder="Write the challenge description"
                onChange={handleChange}
                onBlur={handleBlur}
                border={errors.description && '1px solid red'}
                value={values.description}
              />

              {errors.description && touched.description && errors.description}

              <Input
                name="prtclePrice"
                onChange={handleChange}
                onBlur={handleBlur}
                border={errors.prtclePrice && '1px solid red'}
                value={values.prtclePrice.toString()}
              />

              {errors.prtclePrice && touched.prtclePrice && errors.prtclePrice}

              <Input
                name="maxQuantity"
                onChange={handleChange}
                onBlur={handleBlur}
                border={errors.prtclePrice && '1px solid red'}
                value={values.maxQuantity.toString()}
              />

              {errors.maxQuantity && touched.maxQuantity && errors.maxQuantity}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-around;
  border: 2px solid #117eb7;
  padding: 2rem;
  height: 500px;
  border-radius: 15px;
  background-color: rgba(255, 192, 20, 0.5);
`;

const Input = styled.input`
  border: ${(props) => props.border};
  border-radius: 5px;
`;

const DropzoneWrapper = styled.div`
  background-color: lightgrey;
  border: 2px dashed;
  padding: 1.5rem 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
`;
