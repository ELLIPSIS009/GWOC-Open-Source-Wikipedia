function text(check){
    document.getElementById('watermark').style.display = 'none'
    document.getElementById('data').style.display = 'block'
    let element = [0, 1, 2, 3, 4]
    var div = document.getElementById('data')
    div.innerHTML = ""

    if(check == element[0]){
        let headding = document.createElement('h1')
        headding.setAttribute('class', 'text_heading')
        let para1 = document.createElement('p')
        para1.setAttribute('class', 'text_para')
        let image1 = document.createElement('img')
        image1.setAttribute('src', 'https://git-scm.com/images/logos/downloads/Git-Logo-Black.png')
        image1.setAttribute('class', 'text_img')

        let para2 = document.createElement('p')
        para2.setAttribute('class', 'text_para')
        let image2 = document.createElement('img')
        image2.setAttribute('src', 'https://www.nobledesktop.com/image/blog/git-branches-merge.png')
        image2.setAttribute('class', 'text_img2')

        headding.textContent = 'GIT'
        para1.textContent = 'Git is by far the most popular contemporary version control system in use today. Git is a mature, actively maintained open source project created by Linus Torvalds, the well-known inventor of the Linux operating system kernel, in 2005. Git is used for version control in a surprising number of software projects, both commercial and open source. Git-experienced developers are plentiful in the pool of accessible software development talent, and it runs well on a variety of operating systems and IDEs (Integrated Development Environments). Most organisations and individuals want the functionality, performance, security, and flexibility that Git provides. Git characteristics are listed above. Many teams believe Git to be superior to most other options in side-by-side comparisons.'
        para2.textContent = 'Git was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Since 2005, Junio Hamano has been the core maintainer. As with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version-tracking abilities, independent of network access or a central server. Git is free and open-source software distributed under GNU General Public License Version 2. Git is a Distributed Version Control System (VCS) which is originally developed in 2005 by Linus Torvalds (Creator of Linux) and is open source i.e. freely available to use. It is the most popular and most used version control tool right now.'

        div.appendChild(headding)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(image1)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(para1)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(image2)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(para2)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
    }

    else if(check == element[1]){
        let headding = document.createElement('h1')
        headding.setAttribute('class', 'text_heading')
        let para1 = document.createElement('p')
        para1.setAttribute('class', 'text_para')
        let image1 = document.createElement('img')
        image1.setAttribute('src', 'https://i.ibb.co/88TRn21/clipart1962954.png')
        image1.setAttribute('class', 'text_img')

        let para2 = document.createElement('p')
        para2.setAttribute('class', 'text_para')
        let image2 = document.createElement('img')
        image2.setAttribute('src', 'https://files.programster.org/tutorials/git/flows/github-flow.png')
        image2.setAttribute('class', 'text_img2')

        headding.textContent = 'GitHub'
        para1.textContent = 'GitHub is a web-based Git repository hosting service with a graphical interface. It is the largest coding community in the planet. When you publish a piece of code or a project on GitHub, it gets a lot of attention. Programmers may discover source codes in a variety of languages and make and monitor modifications using Git, a command-line interface. GitHub allows everyone in a team to work on a project from anywhere while facilitating cooperation. You may also look at older versions that were developed at a different period. We now have a basic understanding of Git and GitHub. Its time to learn more about what GitHub is and why its important by looking at its features. GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018. It is commonly used to host open-source projects. As of January 2020, GitHub reports having over 40 million users and more than 190 million repositories (including at least 28 million public repositories). It is the largest source code host as of April 2020.'
        para2.textContent = 'GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project. The flagship functionality of GitHub is “forking” – copying a repository from one user’s account to another. This enables you to take a project that you don’t have write access to and modify it under your own account. If you make changes you’d like to share, you can send a notification called a “pull request” to the original owner. That user can then, with a click of a button, merge the changes found in your repo with the original repo.'

        div.appendChild(headding)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(image1)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(para1)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(image2)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(para2)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
    }

    else if(check == element[2]){
        let headding = document.createElement('h1')
        headding.setAttribute('class', 'text_heading')
        let para1 = document.createElement('p')
        para1.setAttribute('class', 'text_para')
        let image1 = document.createElement('img')
        image1.setAttribute('src', 'https://guides.github.com/features/issues/navigation-highlight.png')
        image1.setAttribute('class', 'text_img')

        let para2 = document.createElement('p')
        para2.setAttribute('class', 'text_para')
        let image2 = document.createElement('img')
        image2.setAttribute('src', 'https://blog.postman.com/wp-content/uploads/2017/08/github-issues-1.png')
        image2.setAttribute('class', 'text_img2')

        headding.textContent = 'Issues'
        para1.textContent = 'Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. They’re kind of like email—except they can be shared and discussed with the rest of your team. Most software projects have a bug tracker of some kind. GitHub’s tracker is called Issues, and has its own section in every repository. GitHub’s issue tracking is special because of our focus on collaboration, references, and excellent text formatting.'
        para2.textContent = 'A title and description describe what the issue is all about. Color-coded labels help you categorize and filter your issues (just like labels in email). A milestone acts like a container for issues. This is useful for associating issues with specific features or project phases (e.g. Weekly Sprint 9/5-9/16 or Shipping 1.0). One assignee is responsible for working on the issue at any given time. Comments allow anyone with access to the repository to provide feedback. GitHub Issues is a tracking tool that is integrated with your GitHub repository. Use GitHub Issues to focus on important tasks and keep plans up to date simultaneously. Every agile team needs to organize its work, but no one wants to stop working in order to track work.'

        div.appendChild(headding)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(image1)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(para1)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(image2)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(para2)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
    }

    else if(check == element[3]){
        let headding = document.createElement('h1')
        headding.setAttribute('class', 'text_heading')
        let para1 = document.createElement('p')
        para1.setAttribute('class', 'text_para')
        let image1 = document.createElement('img')
        image1.setAttribute('src', 'https://wac-cdn.atlassian.com/dam/jcr:ff6b00cc-0ca3-4d5b-8235-8d4cbcedd19e/01.svg?cdnVersion=1813')
        image1.setAttribute('class', 'text_img')

        let para2 = document.createElement('p')
        para2.setAttribute('class', 'text_para')
        let image2 = document.createElement('img')
        image2.setAttribute('src', 'https://wac-cdn.atlassian.com/dam/jcr:dc1a0821-efd6-4852-b7e6-c3a787656c61/02.svg?cdnVersion=1813')
        image2.setAttribute('class', 'text_img2')

        headding.textContent = 'Pull Request (PR)'
        para1.textContent = 'Pull requests allow you to notify others about changes you have made to a branch in a GitHub repository. You can debate and review possible modifications with collaborators and make follow-up commits before your changes are merged into the base branch after a pull request is submitted. A pull request is a Git event in which a contributor requests that a Git repository maintainer examine code that they want to incorporate into a project. You will also learn how to clone a GitHub repository to your local machine so that you may make changes to the code before publishing it to your forked repository. Pull requests are a feature that makes it easier for developers to collaborate using Bitbucket. They provide a user-friendly web interface for discussing proposed changes before integrating them into the official project.'
        para2.textContent = 'In their simplest form, pull requests are a mechanism for a developer to notify team members that they have completed a feature. Once their feature branch is ready, the developer files a pull request via their Bitbucket account. This lets everybody involved know that they need to review the code and merge it into the main branch. But, the pull request is more than just a notification—it’s a dedicated forum for discussing the proposed feature. If there are any problems with the changes, teammates can post feedback in the pull request and even tweak the feature by pushing follow-up commits. All of this activity is tracked directly inside of the pull request. Compared to other collaboration models, this formal solution for sharing commits makes for a much more streamlined workflow. SVN and Git can both automatically send notification emails with a simple script; however, when it comes to discussing changes, developers typically have to rely on email threads. This can become haphazard, especially when follow-up commits are involved. Pull requests put all of this functionality into a friendly web interface right next to your Bitbucket repositories.'

        div.appendChild(headding)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(image1)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(para1)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(image2)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(para2)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
    }

    else if(check == element[4]){
        let headding = document.createElement('h1')
        headding.setAttribute('class', 'text_heading')
        let para1 = document.createElement('p')
        para1.setAttribute('class', 'text_para')
        let image1 = document.createElement('img')
        image1.setAttribute('src', 'https://miro.medium.com/max/1200/1*UbeKefkEmWfMEEwIx5YRlw.png')
        image1.setAttribute('class', 'text_img')

        let para2 = document.createElement('p')
        para2.setAttribute('class', 'text_para')
        let image2 = document.createElement('img')
        image2.setAttribute('src', 'https://www.documentlocator.com/img/knowledge/version-control-diagram.png')
        image2.setAttribute('class', 'text_img2')

        headding.textContent = 'Version Control System (VCS)'
        para1.textContent = 'Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time. As development environments have accelerated, version control systems help software teams work faster and smarter. They are especially useful for DevOps teams since they help them to reduce development time and increase successful deployments. Version control software keeps track of every modification to the code in a special kind of database. If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members.'
        para2.textContent = 'For almost all software projects, the source code is like the crown jewels - a precious asset whose value must be protected. For most software teams, the source code is a repository of the invaluable knowledge and understanding about the problem domain that the developers have collected and refined through careful effort. Version control protects source code from both catastrophe and the casual degradation of human error and unintended consequences. Software developers working in teams are continually writing new source code and changing existing source code. The code for a project, app or software component is typically organized in a folder structure or "file tree". One developer on the team may be working on a new feature while another developer fixes an unrelated bug by changing code, each developer may make their changes in several parts of the file tree.'

        div.appendChild(headding)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(image1)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(para1)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(image2)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(para2)
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))
    }
}
function watermark(){
    document.getElementById('watermark').style.display = 'block'
    var div = document.getElementById('data')
    div.innerHTML = " "
    data.style.display = 'none'
}