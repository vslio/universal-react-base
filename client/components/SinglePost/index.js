import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/posts'
import style from './singlePost.css'

class SinglePost extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchPost(this.props.routeParams.id))
  }

  constructHeader() {
    console.log(this.props)
    return (
      <header>
        <h3 className={style.heading}>Single Post</h3>
        <span className={style.description}>This is just a single post.</span>
      </header>
    )
  }

  render() {
    const header = this.constructHeader()

    return (
      <div>
        {header}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

SinglePost = connect(mapStateToProps)(SinglePost)

export default SinglePost
