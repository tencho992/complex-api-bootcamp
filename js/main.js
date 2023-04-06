
function findHome(){ 
    const url = `https://api.apify.com/v2/datasets/yA34xuu8uoTRwFIfd/items?token=apify_api_fQPhAaCdyXe7HQsxsEu0SLdbCGPhtr25YSAQ`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        //console.log(data)
        const maxPrice = document.querySelector('#maxPrice').value
       
        const house = data.filter(home => home.price <= +maxPrice && home.homeStatus === "FOR_SALE")
        
        //console.log(house)
        
        house.forEach(home => {
            
            const address = home.address.streetAddress
            const homeType = home.homeType
            const bedroom = home.bedrooms
            const bathroom = home.bathrooms
            const price = home.price
            const days = home.daysOnZillow
            const description = home.description
            const agentName = home.listedBy.name
            const agentPhone = home.listedBy.phone
            const agentEmail = home.listedBy.email
            const zipcode = home.address.zipcode
           
            const url = 'https://api.apify.com/v2/datasets/UootMfMCMbM2myRsz/items?token=apify_api_fQPhAaCdyXe7HQsxsEu0SLdbCGPhtr25YSAQ'
            fetch(url)
            .then(res => res.json())
            .then(data => {
            //console.log(data)
                let li = document.createElement('li')
                let img = document.createElement('img')

                document.querySelector('#display').appendChild(img)
                document.querySelector('#display').appendChild(li)
                //console.log(address)
                img.src = home.photos[0]
                li.innerText += `${address} 
                `
                li.innerText += `${homeType} 
                `
                li.innerText += `Bedrooms:${bedroom} 
                Bathrooms:${bathroom} 
                `
                li.innerText += `Price: $${price} 
                `
                li.innerText += `Days on Zillow: ${days} 
                `
                li.innerText += `${description} 
                `
                li.innerText += `${agentName} 
                `
                li.innerText += `${agentPhone} 
                `
                li.innerText += `${agentEmail} 
                `
                
            //console.log(zipcode)
            
            //const schools = data.filter( school => school.address.postalCode)
            
            data.forEach(school => {
                const schoolName = school.name
                const schoolPhone = school.phone
                const schoolRate = school.reviews[0].rating
                //console.log(school)
                let newLi = document.createElement('li')
                
                newLi.appendChild(document.createTextNode(`${schoolName} ${schoolPhone} ${schoolRate}`))
                document.querySelector('#newLi').appendChild(newLi)
                
                //console.log(school)
            
            })
        })
    })
  
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
document.querySelector('#button').addEventListener('click', findHome)