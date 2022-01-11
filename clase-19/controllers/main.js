//
// endpoints
//
// home
const home = (req, res) => res.sendFile(`${process.env.BASE_VIEWS_PATH}/home.html`);

// about
const about = (req, res) => res.sendFile(`${process.env.BASE_VIEWS_PATH}/about.html`);

//
// export
//
module.exports = { home, about };
