import Header from '../compoments/Header';
import React, { useState, useEffect } from 'react';

function Posts() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
    	fetch('https://jsonplaceholder.typicode.com/posts')
        	.then((response) => response.json())
        	.then((data) => {
				setPosts(data);
        	})
        .catch((err) => {
           console.log(err.message);
        });
  	}, []);

    return (
    	<div>
        	<Header current={'Posts'} />
			<main>
        		<div className="overflow-x-auto">
					<div className="min-w-screen min-h-screen bg-gray-100 flex pt-8 justify-center bg-gray-100 font-sans overflow-hidden">
						<div className="w-full lg:w-5/6">
							<h2 className='text-2xl'>Posts</h2>
							<div className="mx-auto lg:max-w-7xl mt-3">
								<div className="max-w-7xl mx-auto mb-3">
									<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
										{posts.map(post => (
											<div key={post.id} className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
												<div className="p-5">
													<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
														<a href="/">
															{post.title}
														</a>
													</h5>
													<div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Juan Perez</div>
													<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
														{post.body}
													</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        	</main>
      	</div>
    );
}

export default Posts;