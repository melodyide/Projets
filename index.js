function showlogo() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('logos')
        .style.display = "block";
    document.getElementById('projectsbtnhide')
        .style.display = "block";    
    document.getElementById('projectsbtn')
        .style.display = "none";
}

function hidelogo() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('logos')
        .style.display = "none";
    document.getElementById('projectsbtnhide')
        .style.display = "none";    
    document.getElementById('projectsbtn')
        .style.display = "block";
}

function showabout() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('abouttext')
        .style.display = "block";
}

function hideabout() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('abouttext')
        .style.display = "none";
}