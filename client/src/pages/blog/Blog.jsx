import BlogBanner from './../../components/blog/BlogBanner'
import BlogList from './../../components/blog/BlogList';
import CenterTitle from '../../components/titles/CenterTitle';
import Banner from '../../components/hero/Banner';
import './../../styles/main/main.css'

const blogTitle = {
  title: "Blog",
  desc: "Senectus et netus et malesuada fames ac. Fermentum iaculis eu non diam phasellus."
}

const blogBanner = {
  image: "https://place-hold.it/800x250/666/fff/000"
}

const blogData = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\n' +
      'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
      'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
      'qui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\n' +
      'voluptatem occaecati omnis eligendi aut ad\n' +
      'voluptatem doloribus vel accusantium quis pariatur\n' +
      'molestiae porro eius odio et labore et velit aut'
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\n' +
      'sit amet autem assumenda provident rerum culpa\n' +
      'quis hic commodi nesciunt rem tenetur doloremque ipsam iure\n' +
      'quis sunt voluptatem rerum illo velit'
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed\n' +
      'alias aut fugiat sit autem sed est\n' +
      'voluptatem omnis possimus esse voluptatibus quis\n' +
      'est aut tenetur dolor neque'
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi\n' +
      'mollitia nobis aliquid molestiae\n' +
      'perspiciatis et ea nemo ab reprehenderit accusantium quas\n' +
      'voluptate dolores velit et doloremque molestiae'
  }
]


export default function Blog() {

  return (
    <section>
      <Banner data={blogBanner} /> 

      <CenterTitle data={blogTitle} />

      {/* <div className="center">
        <p className="sub-title">Blog</p>          
        <h2>Senectus et netus et malesuada fames ac. Fermentum iaculis eu non diam phasellus.</h2>          
      </div> */}
      

      <div className="marginbtm80">
        <BlogList data={blogData}/>
      </div>      
     

    </section>
  )
}