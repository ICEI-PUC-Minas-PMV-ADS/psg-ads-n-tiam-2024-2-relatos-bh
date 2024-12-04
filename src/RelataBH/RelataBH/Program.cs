using RelataBH.Config;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMvc();
builder.Services.AddServices();
builder.Services.AddHealthChecks();

builder.Services.AddContexts(builder.Configuration);
builder.Services.ConfigureAuthentication();

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

