class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc, title: :asc)

    if params[:query].present?
      @movies = @movies.where("title ILIKE ?", "%#{params[:query]}%")
      # @movies = Movie.search_by_title(params[:query])
    end
    # Por defecto todas las acciones de RoR devuelven SIEMPRE HTML
    respond_to do |format|
      format.html
      format.text { render partial: "movies/list", locals: {movies: @movies}, formats: :html}
    end
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update(movie_params)

    respond_to do |format|
      format.html
      format.text { render partial: "movies/movie_infos", locals: { movie: @movie }, formats: :html}
    end
  end

  private 

  def movie_params
    params.require(:movie).permit(:title, :year)
  end
end
