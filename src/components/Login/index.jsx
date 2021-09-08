import { FaLock } from 'react-icons/fa'
import { BsEyeSlashFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import ImagemLogin from '../../assets/Img_login.svg';

import './styles.scss';

export function Login() {
  
  function handleViewPassword() {
    document.getElementById('olho').addEventListener('mousedown', function() {
      document.getElementById('pass').type = 'text';
    });
    
    document.getElementById('olho').addEventListener('mouseup', function() {
      document.getElementById('pass').type = 'password';
    });
    
    // Para que o password não fique exposto apos mover a imagem.
    document.getElementById('olho').addEventListener('mousemove', function() {
      document.getElementById('pass').type = 'password';
    });
  }

  return (
    <div className="container-login">
      <figure>
        <img alt="Login" src={ImagemLogin} />
      </figure>

      <section>
        <h1>Login</h1>
        <form>
        <label>E-mail</label>
        <div className="email">
          <input
          required
          name="email"
          type="email"
          placeholder="E-mail"
          />
          <MdEmail fontSize="18" id="email" />
        </div>

        <label>Senha</label>
        <div className="password">
          <input
          id="pass"
          name="password"
          required
          type="password"
          placeholder="Senha"
          />
          <a id="forgotPassword">Esqueceu a senha?</a>
          <FaLock fontSize="18" id="password" />
          <BsEyeSlashFill fontSize="18" onClick={handleViewPassword} id="olho" class="olho" />
        </div>
        <button type="submit">Entrar</button>

        </form>
      </section>

    </div>
  );
}