import { connect } from 'react-redux';
import { ProfileButton, IProfileButtonDispatchProps } from '../components/ProfileButton';
import { Dispatch } from 'redux';
import { userLogout } from '../actions/actionCreators';

const mapDispatchToProps = (dispatch: Dispatch): IProfileButtonDispatchProps => ({
  onLogout: () => dispatch(userLogout())
});

export const ProfileButtonContainer = connect(undefined, mapDispatchToProps)(ProfileButton);
