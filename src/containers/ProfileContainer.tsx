import { connect } from 'react-redux';

import { Profile, IProfileProps } from '../components/Profile';
import { IState } from '../common/interfaces';


const mapStateToProps = (state: IState): IProfileProps => {
  const { users, currentUser } = state;
  const user = users.get(currentUser);
  if (user === undefined) {
    throw new Error('Trying to edit unknown user');
  }

  return { user };
};

export const ProfileContainer = connect(mapStateToProps)(Profile);
