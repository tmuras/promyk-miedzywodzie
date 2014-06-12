module Jekyll
  class RenderGalleryTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
 
    end

    def render(context)
    	data = YAML.load_file "./_config.yml"
    	@subdirs = ""
		@path="./images/gallery"
		@pathRelative = "images/gallery"
		Dir.foreach(@path) do |room|
		  next if room == "." or room == ".."
		  Dir.foreach(File.join(@path, room)) do |picture|
		  	next if picture == "." or picture == ".."
		  	@subdirs << "<div class=\"col-sm-3\">"
		  	@subdirs << "<a data-fancybox-group=\"portfolio\" class=\"fancybox thumbnail\" href=\"#{File.join(@pathRelative, room, picture)}\">"
		  	@subdirs << "<img class=\"thumb img-responsive\" src=\"#{File.join(@pathRelative, room, picture)}\" alt=\"Pok&#243j nr #{room}. #{data["rooms_description"][room.to_i]}\">"
		  	@subdirs << "<h2 class=\"gallery-description\">Pok&#243j #{room}</h2></a>"
		  	@subdirs << "</div>"
		  end
		end
      	"#{@text} #@subdirs"
    end
  end
end

Liquid::Template.register_tag("render_gallery", Jekyll::RenderGalleryTag)
