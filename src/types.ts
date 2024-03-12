import { images } from "./data";

export type EmploymentEntryProps = {
    icon: typeof images[keyof typeof images]
    institute: string
    position: string
    from: Date
    to: Date
    description: string[]
}

export type EducationEntryProps = {
    insititute: string
    address: string
    from: Date
    to: Date
}

export type EnumerationEntry = {
    title: string
    description: string[]
}

export type ProjectEntryProps = {
    repositry: string
    name: string
    description: string[]
}

export type SkillEntryProps = {
    name: string
    icon: typeof images[keyof typeof images]
    rating: number
    description: string[]
}
