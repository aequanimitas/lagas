defmodule Lagas.PageController do
  use Lagas.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
