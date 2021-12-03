import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { getIsAuth } from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';

export default function AppBar() {
  const isAuth = useSelector(getIsAuth);
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Navigation />
        {isAuth && <UserMenu /> }
      </div>
           
    </header>
  );
}