class UserController {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async registerUser(req, res) {
    const { firstName, lastName, email, password } = req.body;
    const confirmationDate = new Date().toISOString();
    const newUser = {
      firstName,
      lastName,
      email,
      password, // Consider hashing this password before saving
      confirmed: true,
      confirmationDate,
    };

    try {
      const user = await this.userModel.createUser(newUser);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error registering user", error });
    }
  }

  async loginUser(req, res) {
    const { email, password } = req.body;

    try {
      const user = await this.userModel.findUserByEmail(email);
      if (!user || user.password !== password) {
        // Password comparison should use hashing
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Generate JWT token here and send it back
      res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      res.status(500).json({ message: "Error logging in", error });
    }
  }

  async getUserDetails(req, res) {
    const { email } = req.params;

    try {
      const user = await this.userModel.findUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user details", error });
    }
  }
}

module.exports = UserController;
