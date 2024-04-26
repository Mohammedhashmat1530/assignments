const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username:username,
        password:password
    })

    res.status(200).json({
        msg:"Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageLink=req.body.imageLink;

    await Course.create({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink
    })

    res.status(200).json({
        msg:"Course created successfully",
        courseId: Math.floor(Math.random() * 9)
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find().select('title description price imageLink');

    const filteredCourses = courses.map((course, index) => ({
        id: index + 1, // Generate incrementing ID
        title: course.title,
        description: course.description,
        price: course.price,
        imageLink: course.imageLink
    }));
    
    res.status(200).json({
        Course:filteredCourses
    })
});

module.exports = router;