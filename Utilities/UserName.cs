using Microsoft.AspNetCore.Authentication;
using System.DirectoryServices.AccountManagement;

/// <summary>
/// Author: Yong Tok Kim
/// Date: 02/25/2023
/// App Name: Practice
/// </summary>

namespace Practice.Utilities
{
    public class UserName
    {
        // get a full name by user id
        public static string GetUsername(string userId)
        {
            string name = string.Empty;

            PrincipalContext ctx = new PrincipalContext(ContextType.Domain);
            UserPrincipal user = UserPrincipal.FindByIdentity(ctx, userId);

            var givenName = user.GivenName;
            var surName = user.Surname;
            var middleName = user.MiddleName;

            if (string.IsNullOrEmpty(middleName))
            {
                name = $"{givenName} {surName}";
            }
            else
            {
                name = $"{givenName} {middleName.Substring(0, 1)} {surName}";
            }

            return name;
        }
    }
}
