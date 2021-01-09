import React from 'react';
import './styles.css'
import {ReactComponent as YoutubeIcon} from './youtube.svg'
import {ReactComponent as LinkedinIcon} from './linkedin.svg'
import {ReactComponent as IstagramIcon} from './instagram.svg'

function Footer() {
    return (
      <footer className="main-footer">
          App Desenvolvida por Marcus Dimitri. Todos Direitos reservados
          <div className="footer-icons">
          <a  href="https://www.youtube.com/channel/UCk5uvecihQ3P66EoPFbhi6w" target="_new" ><YoutubeIcon/></a>
          <a  href="https://www.youtube.com/channel/UCk5uvecihQ3P66EoPFbhi6w" target="_new" ><LinkedinIcon/></a>
          <a  href="https://www.youtube.com/channel/UCk5uvecihQ3P66EoPFbhi6w" target="_new" ><IstagramIcon/></a>
          </div>
      </footer>
    )

}

export default Footer;