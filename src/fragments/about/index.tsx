import './index.css'

export default function About() {
    return(
        <div id='about'>
            <div className="container">
                <div className="about-text">
                    <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint, accusamus, consectetur obcaecati provident eveniet inventore deserunt repudiandae aut illo nihil voluptatibus placeat, dolor neque beatae voluptatum porro ab doloribus quis. Laudantium, officiis cum culpa, officia voluptas molestiae fuga exercitationem, placeat maiores quis aut. Excepturi ex aliquid beatae nam, rerum, modi ullam possimus sequi ratione omnis atque a eum reiciendis fugiat nostrum in rem ipsum dolorum! Totam officia aliquam natus dolorem officiis, voluptatibus possimus veniam hic quae quisquam blanditiis nobis facere, sed perferendis, magnam laboriosam magni illo tempore temporibus sit voluptas architecto. A eligendi neque qui vitae velit dolores dolor.
                    </p>
                </div>
                <div className="skill">
                    <h1>My Expertise</h1>
                    <div className="skill-box-grid">
                        <div className="skill-box">
                            <i className="fa-brands fa-node"></i>
                            <h2>Node.js</h2>
                        </div>
                        <div className="skill-box">
                            <i className="fa-brands fa-square-js"></i>
                            <h2>Javascript</h2>
                        </div>
                        <div className="skill-box">
                            <i className="fa-brands fa-react"></i>
                            <h2>React</h2>
                        </div>
                        <div className="skill-box">
                            <i className="fa-brands fa-android"></i>
                            <h2>Android</h2>
                        </div>
                        <div className="skill-box">
                            <i className="fa-brands fa-html5"></i>
                            <h2>HTML</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}