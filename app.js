//navbar links
const linkedInBtn = document.querySelector('.linkedInBtn');
linkedInBtn.addEventListener('click', ()=>{
    // window.location.href = 'https://www.linkedin.com/in/suvesh-pandey/'
    window.open('https://www.linkedin.com/in/suvesh-pandey/', '_blank');
})

// const githubBtn = document.querySelector(".githubBtn");
// githubBtn.addEventListener('click', ()=>{
//     window.open('https://github.com/suveshpandey', '_blank');
// })

const githubBtn = document.getElementsByClassName('githubBtn');
for(let i = 0; i<githubBtn.length; i++){
    githubBtn[i].addEventListener('click', ()=>{
        window.open('https://github.com/suveshpandey', '_blank');
    })
}

const twitterBtn = document.querySelector(".twitterBtn");
twitterBtn.addEventListener('click', ()=>{
    window.open('https://x.com/suvesh_298?t=YJ2LgU8dG57jFLHCf42TcQ&s=08', '_blank')
})

//projects
const flipkartLive  = document.getElementById('flipkartLive');
flipkartLive.addEventListener('click', ()=>{
    alert("This project is not live!")
})

const flipkartGithub  = document.getElementById('flipkartGithub');
flipkartGithub.addEventListener('click', ()=>{
    window.open('https://github.com/suveshpandey/Flipkart-cl', '_blank')
})


const netflixLive  = document.getElementById('netflixLive');
netflixLive.addEventListener('click', ()=>{
    alert("This project is not live!")
})

const netflixGithub  = document.getElementById('netflixGithub');
netflixGithub.addEventListener('click', ()=>{
    window.open('https://github.com/suveshpandey/Netflix-cl', '_blank')
})


const tictactoeLive  = document.getElementById('tictactoeLive');
tictactoeLive.addEventListener('click', ()=>{
    window.open('https://sp-tictactoe.netlify.app/', '_blank')
})

const tictactoeGithub  = document.getElementById('tictactoeGithub');
tictactoeGithub.addEventListener('click', ()=>{
    window.open('https://github.com/suveshpandey/Tic-Tac-Toe', '_blank')
})


const imageSearchEngineLive  = document.getElementById('imageSearchEngineLive');
imageSearchEngineLive.addEventListener('click', ()=>{
    window.open('https://sp-imagesearchengine.netlify.app/', '_blank')
})

const imageSearchEngineGithub  = document.getElementById('imageSearchEngineGithub');
imageSearchEngineGithub.addEventListener('click', ()=>{
    window.open('https://github.com/suveshpandey/Image-Search-Engine', '_blank')
})


const textUtilsLive  = document.getElementById('textUtilsLive');
textUtilsLive.addEventListener('click', ()=>{
    window.open('https://sp-text-utils.netlify.app/', '_blank')
})

const textUtilsGithub  = document.getElementById('textUtilsGithub');
textUtilsGithub.addEventListener('click', ()=>{
    window.open('https://github.com/suveshpandey/TextUtils', '_blank')
})


//links

const leetcodeBtn = document.getElementById('leetcodeBtn');
leetcodeBtn.addEventListener('click', ()=>{
    window.open('https://leetcode.com/u/Suvesh_Pandey/', '_blank');
})

const hackerRankBtn = document.getElementById('hackerRankBtn');
hackerRankBtn.addEventListener('click', ()=>{
    window.open('https://www.hackerrank.com/profile/jpsuvesh29', '_blank');
})

const gfgBtn = document.getElementById('gfgBtn');
gfgBtn.addEventListener('click', ()=>{
    window.open('https://www.geeksforgeeks.org/user/suveshpandey/', '_blank');
})


//socials
const linkedIn = document.getElementById('linkedIn');
linkedIn.addEventListener('click', ()=>{
    window.open('https://www.linkedin.com/in/suvesh-pandey/', '_blank');
})

const twitter = document.getElementById('twitter');
twitter.addEventListener('click', ()=>{
    window.open('https://x.com/suvesh_298?t=YJ2LgU8dG57jFLHCf42TcQ&s=08', '_blank')
})

const discord = document.getElementById('discord');
discord.addEventListener('click', ()=>{
    window.open('https://discord.com/users/suvesh_pandey', '_blank');

})

// resume
const resume1 = document.getElementById('resume1');
resume1.addEventListener('click', ()=>{
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
});
const resume2 = document.getElementById('resume2');
resume2.addEventListener('click', ()=>{
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
});

const goToTopBtn = document.querySelector(".goToTopBtn");
const navbar = document.querySelector(".navbar");
goToTopBtn.addEventListener('click', ()=>{
    navbar.scrollIntoView({behavior: 'smooth'});
})


// let title = document.querySelector('.occupation');
// let index = 1;
// let arr = ["I am a Frontend Developer", "I am a Student", "I am a Learner"]
// let name = "I am a Student";

// const typeWriter = () =>{
//     let newTitle = name.slice(0,index);
//     title.innerText = newTitle;
//     if(index > name.length) index = 1;
//     else index++;

//     setTimeout( () => typeWriter(), 200);
// }
// typeWriter();

let title = document.querySelector('.occupation');
let index = 0;
let arrIndex = 0;
let arr = ["Frontend Developer", "Student", "Learner"];

const typeWriter = () => {
    let name = arr[arrIndex];
    let newTitle = name.slice(0, index);
    title.innerText = newTitle;

    if (index > name.length) {
        index = 0;
        arrIndex = (arrIndex + 1) % arr.length;
    } 
    
    else {
        index++;
    }

    setTimeout(() => typeWriter(), 220);
};



typeWriter();
