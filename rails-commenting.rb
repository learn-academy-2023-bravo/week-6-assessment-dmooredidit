# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Answer: This defines the class of BlogPost and it allows inheritance or information to be received from the ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) Answer: will show a list of all BlogPosts in an array/ all blogs w/ associated foreign key id if they have any. 
    @posts = BlogPost.all
  end

  # ---3) Answer: Allows Will allow selected blogpost to be found and shown by calling on the specific id assigned to the specific blog 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Answer: Will create a new BlogPost if information is valid (if using params which I see they are listed below)
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Answer: Will allow for an edit on a specific blogpost (selected blogpost). It allows for editing the specific post by accessing the specifi id using the params of id. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Answer: Checks to verify that information is valid. If valid, the update will be accepted and the blogpost will then be updated specifically using params params id. After update, it will then redirect to reflect updated blogpost in the list of posts. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path
    end
  end

  # ---9) Answer for 9 and 10: This is a private parameter that ensures blogposts cannot be created and added if the information is not included (i.e. a blogpost with a title and content)
  private
  def blog_post_params
    # ---10)  
    params.require(:blog_post).permit(:title, :content)
  end
end
