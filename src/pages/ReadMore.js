import React, { useState } from "react";
// import "../assets/appStyle.css";
import style from "../assets/appStyle.module.css";

const ReadMore = () => {
  const [text] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores placeat nihil libero minus eum. Consectetur neque cupiditate cum tempore porro numquam tenetur minima expedita, nemo quidem voluptates magni, possimus voluptas quos eos? Debitis repellat ullam, accusantium repellendus fugiat quasi cumque numquam et saepe ad atque cupiditate illum, doloremque ducimus sunt delectus quae quo non nemo exercitationem nesciunt? Molestiae amet provident, eveniet quibusdam ratione aliquam. Culpa, neque id at quae dolorem ipsa aliquam rem iste optio iusto! Numquam aperiam culpa voluptas earum quaerat vitae rerum voluptatum atque non qui totam vero nesciunt sit repellendus ad doloribus rem aliquam, mollitia quos quam sint ducimus aut! Ad possimus commodi ut adipisci modi totam voluptatem, doloremque soluta aliquam recusandae placeat, tenetur dolores vel eum eos natus impedit illum ipsum non officia labore illo facilis culpa accusantium! Ex aut laborum ipsa nam. Aspernatur magni nulla, reprehenderit quae adipisci deserunt quasi molestias cum, temporibus, enim perferendis?"
  );
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <div>
        <h2 className='textclr'>Text Heading</h2>
        <p className={style.danger}>{isReadMore && "This is double End"}</p>
        <p className='pclr'>{text ?? "This is double ??"}</p>
        <p>{isReadMore ? text.slice(0, 25) : text}</p>
        {text.length > 150 ? (
          <button className='btn btn-primary' onClick={toggleReadMore}>
            {isReadMore ? "...Read More" : "...Read Less"}
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ReadMore;
