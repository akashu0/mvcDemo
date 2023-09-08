import User from "../model/userModel";

// ---------------Home PAGE---------

const landing_Page = async (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    res.render("error", { error });
  }
};

export { landing_Page };
