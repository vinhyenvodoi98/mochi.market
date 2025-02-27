import './style.css';
import cinchBlock from 'assets/partners/cinchblock.png';
import btxCapital from 'assets/partners/btx-capital.png';
import magnus from 'assets/partners/magnus_capital.png';
import raptor from 'assets/partners/raptor.png';
import x21 from 'assets/partners/x21.svg';
import daomaker from 'assets/partners/daomaker.png';
import blocksync from 'assets/partners/blocksync.png';
import mercurius from 'assets/partners/mercurius.png';
import moonWhale from 'assets/partners/moon-whale.png';
import plasm from 'assets/partners/plasm.png';
import blackmamba from 'assets/partners/blackmamba.png';
import mintedlab from 'assets/partners/mintedlab.png';
import manticorecapital from 'assets/partners/manticorecapital.png';
import halborn from 'assets/partners/halborn-black.svg';
import polygon from 'assets/partners/polygon-logowhite.svg';
import wanaka from 'assets/partners/wanaka.png';

const members = [
  {
    image: daomaker,
    url: 'https://daomaker.com/',
    name: 'Dao Maker',
    className: 'daomaker',
  },
  {
    image: plasm,
    url: 'https://www.plasmnet.io/',
    name: 'plasmnet',
    className: 'plasm',
  },
  {
    image: polygon,
    url: 'https://polygon.technology/',
    name: 'polygon',
    className: 'polygon',
  },
  {
    image: magnus,
    url: 'https://magnusdigitalassets.com/',
    name: 'magnus capital',
    className: 'magnus',
  },
  {
    image: raptor,
    url: 'https://www.raptorcapital.io/',
    name: 'raptor capital',
    className: 'raptor',
  },
  {
    image: btxCapital,
    url: 'https://btx.capital/',
    name: 'btx capital',
    className: 'btxCapital',
  },
  {
    image: x21,
    url: 'https://x21digital.com/',
    name: 'x21 digital',
    className: 'x21',
  },
  {
    image: moonWhale,
    url: 'https://moonwhale.ventures/',
    name: 'moonwhale',
    className: 'moonWhale',
  },
  {
    image: cinchBlock,
    url: 'https://www.cinchblock.com/',
    name: 'cinch block',
    className: 'cinchBlock',
  },
  {
    image: blocksync,
    url: 'https://www.blocksync.com/',
    name: 'blocksync ventures',
    className: 'blocksync',
  },
  {
    image: mercurius,
    url: '',
    name: 'mercurius',
    className: 'mercurius',
  },
  {
    image: blackmamba,
    url: 'https://blackmamba.ventures/',
    name: 'Black Manba',
    className: 'blackmamba',
  },
  {
    image: mintedlab,
    url: '',
    name: 'Minted Lab',
    className: 'mintedlab',
  },
  {
    image: manticorecapital,
    url: 'https://manticore.vc/',
    name: 'Manticore Capital',
    className: 'manticorecapital',
  },
  {
    image: halborn,
    url: 'https://halborn.com/',
    name: 'Halborn',
    className: 'halborn',
  },
  {
    image: wanaka,
    url: 'https://wanakafarm.com/',
    name: 'Wanaka',
    className: 'wanaka',
  },
];

function Partner({ data }) {
  const { image, name, url, className } = data;
  return (
    <a className='center' href={url} target='_blank' rel='noreferrer'>
      <div className='partner-card'>
        <img className={className} src={image} alt={name} />
      </div>
    </a>
  );
}

export default function Partners() {
  return (
    <div className='background-dark'>
      <div className='partners center container'>
        <div>
          <p className='big-title lc-color'>Investors And Partners</p>
        </div>
        <div>
          <div className='image-area row'>
            {members.map((partner, index) => (
              <div className='col-4 col-lg-3 center' key={index}>
                <Partner data={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
