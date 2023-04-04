import React from 'react';
import {
  AccountCardStyledSection,
  AccountCardStyledTitle,
  AccountCardStyledAmount,
  AccountCardStyledDescription, 
  AccountCardStyledContainer,
} from './AccountCard.styled';
//import { MainButtonStyled } from '../MainButton/MainButton.styled';
import MainButton from '../MainButton/MainButton';
import { useSelector } from 'react-redux';

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
  const globalState = useSelector((state) => state);
  return (
    <>
      {globalState?.user?.email &&
        accountsContent.map((account, i) => (
          <AccountCardStyledSection key={i}>
            <AccountCardStyledContainer>
              <AccountCardStyledTitle>{account.title}</AccountCardStyledTitle>
              <AccountCardStyledAmount>
                {account.amount}
              </AccountCardStyledAmount>
              <AccountCardStyledDescription>
                {account.description}
              </AccountCardStyledDescription>
            </AccountCardStyledContainer>
            <AccountCardStyledContainer className="cta">
              <MainButton className="transaction-button">
                View transactions
              </MainButton>
            </AccountCardStyledContainer>
          </AccountCardStyledSection>
        ))}
    </>
  );
};
// FRANcOIS pourquoi ça ne prends pas les classnames de mainButton, mais qu eça prends les classname de AccountCardStylesSection

export default AccountCard;
