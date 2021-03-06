import React, {Component} from "react";
import {Container, Image, Jumbotron} from "react-bootstrap";
import "../css/bootstrap.css"

export default class Landing extends Component {
  render() {
    return (
        <Container className="mt-5">
          <Jumbotron style={{backgroundColor: "#e9ecef"}}>
            <h2>Rhizomik Copyright<b>LY</b></h2>
            <p>Decentralized Application (ÐApp) for Copyright Management</p>
            <div role="alert" className="alert show alert-info fade">
              <strong>Announcement:</strong> Many CopyrightLY's features
              already available from the top menu!
              <div className="small">
                Smart contracts are deployed on <b _ngcontent-ptx-c33="">Rinkeby</b> testnet. A browser providing an <b>Ethereum wallet</b>, or an iOS
                or Android wallet
                application, is required. You can try <a href="https://metamask.io/download" target="_blank">MetaMask</a>.
              </div>
            </div>
            <h3>Features</h3>
            <p>
              CopyrightLY is a decentralised application that leverages <b>blockchain</b> and <b>semantic web</b> technologies to
              facilitate copyright management, for instance:
            </p>
            <ul>
              <li>
                Integrated into existing <b>social media</b> platforms, it
                allows content creators to explore ways to <b>monetize</b> their media beyond
                those made possible by those platforms.
              </li>
              <li>
                Provides potential reusers ways of checking the <b>authorship</b> of content they
                are willing to <b>reuse</b>, and the <b>conditions</b> under which
                it is available.
              </li>
              <li>
                Settles a <b>consensus-based</b> layer of <b>authorship</b> claims to <b>anchor</b> copyright
                transactions like decentralised content markets or
                Non-Fungible Tokens (<b>NFTs</b>)
              </li>
            </ul>
            <h3>Implementation</h3>
            <p>
              To do so, creators link content on social media platforms to <b>on-chain authorship claims</b> tied
              to their identities. They can also provide additional <b>evidence</b> combining off-chain
              data and on-chain transactions to sustain those claims.
              These can be used in case of a copyright <b>complaint</b>, even as evidence in
              court. This approach also discourages false claims, which
              cannot be retracted once on-chain.
            </p>
            <p>
              Authorship claims are accompanied by default <b>reuse terms</b> modelled using
              semantic technologies and based on the <a href="https://rhizomik.net/ontologies/copyrightonto" target="_blank">Copyright Ontology</a>,
              which provides the necessary building blocks to make the
              terms <b>machine-actionable</b>.
              Reusers can <b>negotiate</b> these
              terms and, if accepted, on-chain transactions are generated
              to keep track of the <b>agreements</b>.
            </p>
            <p>
              <a

                  href="https://github.com/rhizomik/copyrightly/wiki"
                  target="_blank"
              >More details...</a
              >
            </p>
            <h3>Team</h3>
            <a

                href="https://www.udl.cat"
                target="_blank"
            ><Image

                src="UdL.svg"
                height="65px"
                alt="Universitat de Lleida"
            /></a>
            <ul>
              <li>
                <a

                    href="https://rhizomik.net/~roberto"
                    target="_blank"
                >Roberto García</a
                >
              </li>
              <li>
                <a

                    href="http://www.dret.udl.cat/ca/pla-formatiu/professorat/detall/index.html?enc=MjA4MjQyMTQ="
                    target="_blank"
                >Ana Cediel</a
                >
              </li>
              <li>
                <a

                    href="https://www.researchgate.net/profile/Rosa-Gil-3"
                    target="_blank"
                >Rosa Gil</a
                >
              </li>
              <li>
                <a

                    href="https://www.researchgate.net/profile/Merce-Teixido"
                    target="_blank"
                >Mercè Teixidó</a
                >
              </li>
            </ul>
            <h3>Contact</h3>
            <pre>copyrightly@rhizomik.net</pre>
            <h3>Support</h3>
            <p>
              Supported by project ONTOCHAIN, which has received funding
              from the European Union’s Horizon 2020 research and
              innovation programme under grant agreement No 957338
            </p>
            <a

                href="https://ontochain.ngi.eu"
                target="_blank"
            ><img

                src="https://ontochain.ngi.eu/sites/default/files/logo-ngi-ontochain-positive.png"
                height="60px"
                alt="ONTOCHAIN Logo"/></a
            ><img

              src="https://ontochain.ngi.eu/sites/default/files/images/EU_flag.png"
              height="60px"
              alt="European Union Flag"
          />
            <p _ngcontent-psj-c33="">
				<span _ngcontent-psj-c33="" className="fab fa-github"></span
        ><a
                _ngcontent-psj-c33=""
                href="https://github.com/rhizomik/copyrightly"
            >
              rhizomik/copyrightly</a
            >
            </p>
          </Jumbotron>
        </Container>
    )
  }
}