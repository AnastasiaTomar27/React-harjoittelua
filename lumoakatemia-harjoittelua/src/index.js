import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function DivElementti() {
  return (
    <div>Tämä on yksinkertainen div-elementti</div>
  )
}

function Otsikot() {
  return (
    <div>
      <h1>Otsikko</h1>
      <h2>Alaotsikko</h2>
    </div>
  )
}

function Kappale() {
  return (
    <div>
      <p>Tämä on kappaleen teksti</p>
    </div>
  )
}

function Lista() {
  return (
    <div>
      <ul>
        <li>Ensimmäinen listaelementti</li>
        <li>Toinen listaelementti</li>
        <li>Kolmas listaelementti</li>
      </ul>
    </div>
  )
}

function Kuva() {
  return (
    <img src="./React_pic.png" alt="Kuva" width={300} height={150} />
  )
}

function Linkki() {
  return(
    <a href="https://www.keuda.fi">Keuda</a>
  )
}

function Taulukko() {
  return(
    <table border={1} color='blue'>
      <tbody>
        <tr>
          <th>Hedelmät</th>
          <th>Vihannekset</th>
        </tr>
        <tr>
          <td>Omena</td>
          <td>Peruna</td>
        </tr>
        <tr>
          <td>Banaani</td>
          <td>Porkkana</td>
        </tr>
      </tbody>
    </table>
  )
}

function Ympyra() {
  return (
    <svg width={100} height={100}>
      <circle cx={50} cy={50} r={50} fill='blue' />
    </svg>
  )
}

function Painikkeet() {
  return (
    <div>
      <button>Painike 1</button>
      <button>Painike 2</button>
      <button>Painike 3</button>
    </div>
  )
}

function Sahkoposti() {
  return (
    <form action="">
      <label htmlFor="email">Sähköposti: <input type='email' /></label>
      <button type='submit'>Lähetä</button>
    </form>
  )
}

function Kartta() {
  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4687170.455081754!2d19.937562117902992!3d65.10554583680602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cadf4b32f6dd%3A0x146d63c75a810!2sSuomi!5e0!3m2!1sfi!2suk!4v1697640876428!5m2!1sfi!2suk" title="myFrame" style={{ width: "600", height:"450", frameborder:"0", border: 0, allowfullscreen: "", tabindex: "0" }}>
    </iframe>
  )
}

function Video() {
  return (
    <iframe width="640" height="360" src="https://www.youtube.com/embed/9D1x7-2FmTA?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" title="Full React Tutorial #3 - Components &amp; Templates" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}

function HaeVuodenAika() {
  const date = new Date();
  const month = date.getMonth();
  if (month >= 2 && month <= 4) {
    return "Kevät";
  } else if (month >= 5 && month <= 7) {
    return "Kesä";
  } else if (month >= 8 && month <= 10) {
    return "Syksy";
  } else {
    return "Talvi";
  }
}

function HaeSatunnaisluku() {
  return Math.floor(Math.random() * 100) + 1;
}

function Home() {
  return (
    <div>Tervetuloa kotisivulleni</div>
  )
}
function About() {
  return (
    <div>Tietoa meistä</div>
  )
}
function Contact() {
  return (
    <div>Ota yhteyttä</div>
  )
}
function Navigointi() {
  return (
    <nav>
      <ul className='navigointi_lista'>
        <li><a href="/"><Home /></a></li>
        <li><a href="/about"><About /></a></li>
        <li><a href="/contact"><Contact /></a></li>
      </ul>
    </nav>
  )
}

function TaulukkoListaksi() {
  const items = ["Yksi", "Kaksi", "Kolme"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function DynaaminenElementti() {
  const dynamicText = "Tämä on dynaaminen teksti";
  return <div>{dynamicText}</div>;
}

function MapNumerot() {
  const numbers = [1, 2, 3, 4, 5];
  const numberItems = numbers.map((number) => {
    return <li key={number}>{number}</li>
  })
  return (
    <ul>
      {numberItems}
    </ul>
  );
}

function MapNimet() {
  const nimet = ["Aada", "Bärtil", "Kalle", "Taavetti", "Eeva"];
  const yksiloNimet = nimet.map((nimi, index) =>
  <p key={index}>{nimi}</p>);

  return (
    <div>
      {yksiloNimet}
    </div>
  );
}

function TuoteLista() {
  const tuotteet = [
    { nimi: "Tuote 1", hinta: 10 },
    { nimi: "Tuote 2", hinta: 20 },
    { nimi: "Tuote 3", hinta: 30 },
    { nimi: "Tuote 4", hinta: 40 },
    { nimi: "Tuote 5", hinta: 50 },
  ];

  const yksiloTuotteet = tuotteet.map((tuote, index) => (
    <div key={index}>
      <p>{tuote.nimi}: {tuote.hinta} €</p>
    </div>
  ));

  return (
    <div>
      {yksiloTuotteet}
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <div>{<Navigointi />}</div>
      <br />
      <br />
      <DivElementti />
      < Otsikot />
      < Kappale />
      < Lista />
      < Kuva />
      < br/>
      < Linkki />
      <br />
      <br />
      < Taulukko />
      < Ympyra />
      < Painikkeet />
      <br />
      < Sahkoposti />
      <br />
      < Kartta />
      <br />
      < Video />
      <div>Vuoden aika: { <HaeVuodenAika /> }</div>
      <br />
      <div>Satunnaisluku: { <HaeSatunnaisluku /> }</div>
      <br />
      <div>{<TaulukkoListaksi />}</div>
      <br />
      <div>{<DynaaminenElementti />}</div>
      <br />
      <div>{<MapNumerot />}</div>
      <br />
      <div>{<MapNimet />}</div>
      <br />
      {<TuoteLista />}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
