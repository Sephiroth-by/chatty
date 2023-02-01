import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import './App.scss';
import { useEffect } from 'react';
import { socketService } from '@services/socket/socket.service';
import Toast from '@components/toast/Toast';
import { useSelector } from 'react-redux';

const App = () => {
  const { notifications } = useSelector((state) => state);

  useEffect(() => {
    socketService.setupSocketConnection();
  }, []);

  return (
    <>
      {notifications && !!notifications.length && (
        <Toast position="top-right" toastList={notifications} autoDelete={true}></Toast>
      )}
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </>
  );
};

export default App;
