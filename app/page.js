import Button from './components/Button.js';
import styles from './page.module.css';
import ProductCard from './ProductCard.js';
import Logo from './public/logo.png';
import Placeholder from './public/placeholder.jpg';

export default function Home() {
  return (
    <div>
      <header>
        <div className={styles.header}>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h1>Buy holistic UX design & Web development</h1>
          <div>
            <ProductCard />
          </div>
          <p>
            Bring teams together and quickly go from big ideas to execution with
            a workspace that leverages AI at every stage.
          </p>
          <input type="email" placeholder="Your email address" />
          <Button large>Sign up free</Button>
          <img
            src={Placeholder}
            alt="Miro Workspace"
            className={styles.placeholder}
          />
        </section>
      </main>
    </div>
  );
}
