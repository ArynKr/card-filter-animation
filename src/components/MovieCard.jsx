import { motion } from 'framer-motion';
import './MovieCard.css';

function MovieCard({ movie }) {
	return (
		<motion.div
			layout
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			className='movie-card'
		>
			<h2>{movie.title}</h2>
			<img
				src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
				alt=''
			/>
		</motion.div>
	);
}

export default MovieCard;
