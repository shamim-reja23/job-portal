import { Company } from "../models/company.model.js"

export const registerCompany = async (req, res) => {
    try {
        let { companyName } = req.body
        companyName = companyName?.trim()

        if(!companyName) {
            return res.status(400).json({
                success: false,
                message: "Company name is required"
            })
        }

        const escapedName = companyName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let company = await Company.findOne({ 
            name: { $regex: `^${escapedName}$`, $options: "i" }, 
            userId: req.id 
        })

        if(company){
            return res.status(400).json({
                success: false,
                message: "You can't register same company"
            })
        }

        company = await Company.create({
            name: companyName,
            userId: req.id
        })

        return res.status(201).json({
            success: true,
            message: "Company registered successfully",
            company
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const getCompany = async(req, res) => {
    try {
        const userId = req.id
        const companies = await Company.find({ userId })

        if(!companies){
            return res.status(404).json({
                success: false,
                message: "Companies not found"
            })
        }

        return res.status(200).json({
            success: true,
            companies
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const getCompanyById = async(req, res) => {
    try {
        const companyId = req.params.id
        const company = await Company.findOne({
            _id: companyId,
            userId: req.id
        })

        if(!company){
            return res.status(404).json({
                success: false,
                message: "Company not found"
            })
        }

        return res.status(200).json({
            success: true,
            company
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const updateCompany = async(req, res) => {
    try {
        const { name, description, website, location } = req.body
        const companyId = req.params.id
        const file = req.file
        // cloudinary here


        const updateData = {}

        if(name) updateData.name = name.trim();
        if(description) updateData.description = description;
        if(website) updateData.website = website;
        if(location) updateData.location = location;

        const company = await Company.findOneAndUpdate(
            { _id: companyId, userId: req.id },
            updateData,
            { new: true }
        )

        if(!company){
            return res.status(404).json({
                success: false,
                message: "Company not found or unauthorized"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Company information updated",
            company
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

