import { IPostItem } from '@/data/posts.data';
import Link from 'next/link';
import React from 'react';

const PostItem = (props: IPostItem) => {
  return (
    <div>
      <Link href={props.url} className='postItem'>
        <img src={props.thumbnail} alt='post' />
        <div className='details'>
          <span className='blue '>Category</span>
          <span className='date'>{props.date}</span>
        </div>
        <p>{props.title}</p>
        <div className='details'>
          <img src={props.author_image} alt='person' />
          <span>{props.author}</span>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
