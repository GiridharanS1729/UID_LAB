import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css';

const UserProfile = ({ name, email, bio, college, avatarUrl }) => {
  return (
    <div className="user-profile">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="avatar" />
      <h1>{name}</h1>
      <p>{college}</p>
      <p>EMail: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default UserProfile;
