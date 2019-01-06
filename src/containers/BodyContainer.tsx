import { connect } from 'react-redux';

import { Body, IBodyStateProps } from '../components/Body';
import { IState } from '../common/interfaces';


const mapStateToProps = (state: IState): IBodyStateProps => ({
  isProfileOpen: state.isProfileOpen
});

export const BodyContainer = connect(mapStateToProps)(Body);
