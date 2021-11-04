const linksSocialMedia = {
  github: 'OutroTassio',
  youtube: 'tassiosamuel72',
  instagram: 'tassiosamuel',
  facebook: 'tassio.samuel1',
  twitter: 'tahciun'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubprofileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPicture.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubprofileInfos()
