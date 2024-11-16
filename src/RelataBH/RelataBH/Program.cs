using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Refit;
using RelataBH.database;
using RelataBH.Database;
using RelataBH.Service.Auth;
using RelataBH.Service.Auth.Api;
using RelataBH.Service.Location;
using RelataBH.Service.Relato.Category;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMvc();
builder.Services.AddTransient<IAuthService, IAuthServiceImpl>();
builder.Services.AddTransient<ILocationService, ILocationServiceImpl>();
builder.Services.AddTransient<ICategoryService, ICategoryServiceImpl>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthentication()
    .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, token =>
{
    token.Authority = "https://securetoken.google.com/relata-bh";
    token.Audience = "relata-bh";
    token.TokenValidationParameters.ValidIssuer = "https://securetoken.google.com/relata-bh";
});


builder.Services.AddRefitClient<IAuthApi>().ConfigureHttpClient(
    client => client.BaseAddress = new Uri("https://identitytoolkit.googleapis.com")
);
builder.Services.AddHealthChecks();

////Database
//builder
//    .Services
//    .AddSqlite<DatabaseContext>(builder.Configuration.GetConnectionString("SqliteConnectionString"));

//Database
builder.Services.AddDbContext<UserContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.AddDbContext<LocationContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.AddDbContext<RelatoContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

//CORS
builder.Services.AddCors(option =>
{
    option.AddPolicy("AllowAllHeaders", builder => {
        builder
            .WithOrigins("*")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAllHeaders");

app.UseAuthorization();

app.UseAuthentication();

app.MapControllers();

app.MapHealthChecks("/health");

app.Run();

