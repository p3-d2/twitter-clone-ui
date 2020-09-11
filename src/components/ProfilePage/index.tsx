import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Pedro Henrique</h1>
        <h2>@Pedro-frontEnd</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 29 de janeiro de 2004
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>99</strong>
          </span>
          <span>
            <strong>689 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
