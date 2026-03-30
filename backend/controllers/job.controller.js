import { Company } from "../models/company.model.js"
import { Job } from "../models/job.model.js"

export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body
        const userId = req.id

        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const company = await Company.findOne({
            _id: companyId,
            userId
        })
        if(!company){
            return res.status(403).json({
                success: false,
                message: "Unauthorized"
            })
        }

        const job = await Job.create({
            title: title.trim(),
            description: description.trim(),
            requirements: requirements.split(",").map(r => r.trim()),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        })

        return res.status(201).json({
            success: true,
            message: "New job posted successfully",
            job
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const getAllJobs = async(req, res) => {
     try {
        const keyword = req.query.keyword || ""

        const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const query = {
            $or:[
                { title: {$regex: escapedKeyword, $options: "i"} },
                { description: {$regex: escapedKeyword, $options: "i"} },
            ]
        }

        const jobs = await Job.find(query).populate("company");
        if(jobs.length === 0){
            return res.status(404).json({
                success: false,
                message: "Jobs not found"
            })
        }

        return res.status(200).json({
            success: true,
            jobs
        })
     } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
     }
}