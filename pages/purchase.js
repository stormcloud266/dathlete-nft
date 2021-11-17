import constants from '/constants';
import usePoller from '/hooks/usePoller';
import styled from 'styled-components';
import { useState } from 'react';
import { ethers } from 'ethers';
import ERC20 from '/artifacts/contracts/interfaces/IERC20.sol/IERC20.json';

export const Purchase = (props) => {
  const { web3Provider, address } = props;
  const { diamondAddress, prtcleAddress } = constants;
  const [prtcleBalance, setPrtcleBalance] = useState('0');

  const getPrtcleBalance = async () => {
    if (address && web3Provider) {
      try {
        const contract = new ethers.Contract(
          prtcleAddress,
          ERC20.abi,
          web3Provider
        );
        const balance = await contract.balanceOf(address);
        setPrtcleBalance(balance.toString());
      } catch (e) {
        console.log(e);
      }
    }
  };

  usePoller(
    () => {
      getPrtcleBalance();
    },
    props.pollTime ? props.pollTime : 1999
  );

  return (
    <div>
      <p>{prtcleBalance}</p>
    </div>
  );
};

const Text = styled.p`
  color: whitesmoke;
`;
