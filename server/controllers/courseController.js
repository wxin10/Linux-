const Course = require('../models/Course');

// 获取所有课程
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: '服务器错误' });
  }
};

// 获取单个课程
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ message: '课程未找到' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: '服务器错误' });
  }
};

// 添加课程
exports.addCourse = async (req, res) => {
  try {
    const { title, description, teacherId } = req.body;
    const course = await Course.create({ title, description, teacherId });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: '服务器错误' });
  }
};

// 更新课程
exports.updateCourse = async (req, res) => {
  try {
    const { title, description, teacherId } = req.body;
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ message: '课程未找到' });
    }
    await course.update({ title, description, teacherId });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: '服务器错误' });
  }
};

// 删除课程
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ message: '课程未找到' });
    }
    await course.destroy();
    res.json({ message: '课程已删除' });
  } catch (error) {
    res.status(500).json({ message: '服务器错误' });
  }
};
