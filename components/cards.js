function Cards (props) {
  return (
    <>
      <div class="flex flex-wrap">
        {props.projects.map((project, index) => (
          <div class="p-4" key={index}>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src={project.image} alt={project.alt} />
              <div class="px-6 py-4">
                <h2 class="font-bold text-xl mb-2" >{project.name}</h2>
                <div class="uppercase tracking-loose mb-2" >{project.tech}</div>
                <div class="text-gray-700 text-base" >{project.description}</div>

                <div class="w-full self-center flex justify-center py-4">
                  <div class="flex-none">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <button class="bg-purple-200 hover:bg-purple-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center mr-2">
                        <span>{project.urlDescription}</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Cards
