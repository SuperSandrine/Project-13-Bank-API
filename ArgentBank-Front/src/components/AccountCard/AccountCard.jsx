import React from 'react';
import { AccountCardStyledSection } from './AccountCard.styled';
import MainButton from '../MainButton/MainButton';

const accountsContent = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
];

const AccountCard = () => {
  return (
    <>
      {accountsContent.map((account) => (
        <AccountCardStyledSection className="account" key="index ">
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="  cta">
            <MainButton className="transaction-button">
              View transactions
            </MainButton>
          </div>
        </AccountCardStyledSection>
      ))}
    </>
  );
};

export default AccountCard;
