import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();



const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    {sendMail: sendMailSpy}
)

describe('Submit feedback', () => {
    it('Should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment test',
            screenshot: 'data:image/png;base64'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled;
        expect(sendMailSpy).toHaveBeenCalled;
    });


    it('Should NOT be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment test',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    });


    it('Should NOT be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    });

    
    it('Should NOT be able to submit a feedback with wrong screenshot extension', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment test',
            screenshot: 'aaaaaaaa.png'
        })).rejects.toThrow();
    });
})