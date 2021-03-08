import * as React from 'react';
import * as Router from 'react-router-dom';
import './sass/PostCard.scss';

type postCard = {
	title: string,
	tags: string,
	hash: string,
	post_time: string,
};

export const PostCard = ({title, tags, hash, post_time}:postCard) => {
	const [history, updateHistory] = React.useState(Router.useHistory());
	const getDigest = () => {
		history.push(`/post/${hash}`);
	}
	return (<div className="post-card" onClick={getDigest}>
		<p className="post-title">{title}</p>
		<div className="metadata">
			<p className="post-tags">{tags}</p>
			<p className="post-time">{`Posted on ${post_time}`}</p>
		</div>
	</div>);
}
