import { Application } from "../models/application.model.js"
import { Job } from "../models/job.model.js"

export const applyJob = async(req, res) => {
    try {
        const userId = req.id 
        const jobId = req.params.id

        if(req.user.role !== 'student'){
            return res.status(403).json({
                success: false,
                message: "Only students can apply"
            })
        }

        if(!jobId){
            return res.status(400).json({
                success: false,
                message: "Job id is required"
            })
        }

        const existingApplicant = await Application.findOne({ job: jobId, applicant: userId});

        if(existingApplicant){
            return res.status(400).json({
                success: false,
                message: "You have already applied for this job"
            })
        }

        const job = await Job.findById(jobId)
        if(!job){
            return res.status(404).json({
                success: false,
                message: "Job not found"
            })
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        })

        job.applications.push(newApplication._id);
        await job.save(); 

        return res.status(201).json({
            success: true,
            message: "Job applied successfully"
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const getAppliedJobs = async(req, res) => {
    try {
        const userId = req.id

        const applications = await Application.find({ applicant: userId }).sort({ createdAt: -1}).populate({
            path: "job",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "company",
                select: "name location"
            }
        })

        if(applications.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Application"
            })
        }

        return res.status(200).json({
            success: true,
            applications
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findOne({
            _id: jobId,
            created_by: req.id
        }).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant',
                select: 'fullName email'
            }
        })

        if(!job){
            return res.status(404).json({
                success: false,
                message: "Job not found"
            })
        }

        return res.status(200).json({
            success: true,
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

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id

        if(!status){
            return res.status(401).json({
                success: false,
                message: "status is required"
            })
        }

        const application = await Application.findOne({ _id: applicationId })
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}