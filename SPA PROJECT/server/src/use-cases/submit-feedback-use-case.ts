import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}


export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}


    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if (!type) {
            throw new Error('TYPE IS REQUIRED')
        }

        if (!comment) {
            throw new Error('COMMENT IS REQUIRED')
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('INVALID SCREENSHOT FORMAT!')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'New Feedback',
            body: [
                `<div style="font-family:sans-serif; font-size: 16px; color: #111">`,
                    `<p>Feedback Type: ${type}</p>`,
                    `<p>Feedback Comment: ${comment}</p>`,
                    screenshot ? `<img src="${screenshot}" />` : null,
                `</div>`
            ].join('\n')
        })
    }
}