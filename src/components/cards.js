function Cards(props) {
    return (
        <div class="flex flex-wrap pb-20">
            {props.items.map((item, index) => ( 
                <div class="p-4">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
                        <img 
                            class="w-full" 
                            src={item.src} 
                            alt={item.alt} />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{item.title}</div>
                            <p class="text-gray-700 text-base">
                            {item.shortDescription}
                            </p>
                        </div>
                        <div class="px-6 py-4">
                            {item.url  ?
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                                    <span>{item.linkName}</span>
                                </button>
                                </a> 
                            : null }
                            
                            {item.urlTwo  ?
                            <a href={item.urlTwo} target="_blank" rel="noopener noreferrer">
                                <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full inline-flex items-center mx-4">
                                    <span>{item.linkNameTwo}</span>
                                </button>
                                </a> 
                            : null }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;