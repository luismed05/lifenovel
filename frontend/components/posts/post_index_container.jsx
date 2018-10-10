import { connect } from 'react-redux';
import { updatePost, deletePost } from '../../actions/post_actions';
import PostIndex from './post_index';
import { filterPagePosts, addAuthorToPosts } from '../../reducers/selectors';


const mapStateToProps = ({ entities: { users, posts }, session }) => ({
  posts: filterPagePosts(session, posts),
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  updatePost: (post) => dispatch( updatePost(post)),
  deletePost: (postId) => dispatch( deletePost(postId)),
});

export default connect( mapStateToProps, mapDispatchToProps )(PostIndex);
