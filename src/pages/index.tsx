import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PostItem  from '@/components/PostItem';
import { posts } from '@/data/posts.data';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Boldo</title>
        <meta name='description' content='Boldo Blog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/logo.svg' />
      </Head>
      <div>
        <div className='container'>
          <Navbar />

          <div className='thoughts'>
            <p>Blog</p>
            <h1>Thoughts and words</h1>
          </div>

          {/*headline section*/}
          <section className='headline' aria-label='headline story'>
            <div className='housesImg'>
              <img src='./images/houses.svg' alt='houses' />
            </div>
            <article className='headlineRight'>
              <div className='details'>
                <span className='blue'>Category</span>
                <span className='date'>November 22, 2021</span>
              </div>
              <p className='headlineText'>Pitch termsheet backing validation focus release.</p>
              <div className='details'>
                <img src='./images/bing.svg' alt='person' />
                <span>Chandler Bing</span>
              </div>
            </article>
          </section>
          <hr />

          {/*articles section*/}
          <section aria-label='latest' className='latest'>
            <h2>Latest News</h2>
            <div className='postsGrid'>
              {posts.map((post, i) => (
                <PostItem key={`${i}-${post.author}`} {...post} />
              ))}
            </div>
            <button className='loadMore blue button-primary'>Load more</button>
          </section>

          {/*cta banner section*/}
          <section className='cta' aria-label='cta banner'>
            <div className='ctaWrapper'>
              <h3 className='ctaText'>An enterprise template to ramp up your company website</h3>
              <form>
                <input type='email' placeholder='Your email address' />
                <button>Start now</button>
              </form>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
