﻿namespace Wordsmith.Api.Models
{
    public class BadRequestResponse
    {
        public string Message { get; }

        public BadRequestResponse(string message)
        {
            Message = message;
        }
    }
}
