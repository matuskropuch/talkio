import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Profile, IProfileStateProps, IProfileDispatchProps } from '../components/Profile';
import { IState } from '../common/interfaces';
import { userUpdateThunk } from '../thunks/userUpdateThunk';


const mapStateToProps = (state: IState): IProfileStateProps => {
  const { users, currentUser } = state;
  const user = users.get(currentUser);
  if (user === undefined) {
    throw new Error('Trying to edit unknown user');
  }

  return { user };
};

const mapDispatchToProps = (dispatch: Dispatch): IProfileDispatchProps => ({
  updateProfile: (name: string, file: File) => dispatch(userUpdateThunk(name, file))
});

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
